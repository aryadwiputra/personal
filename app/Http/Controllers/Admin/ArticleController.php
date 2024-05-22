<?php

namespace App\Http\Controllers\Admin;

use App\Enums\ArticleStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\ArticleRequest;
use App\Models\Category;
use App\Models\Tag;
use App\Models\Article;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ArticleController extends Controller
{
    public $tags;
    public $categories;
    public $statuses;
    public function __construct()
    {
        $this->tags = Tag::select('id', 'name')->get();
        $this->categories = Category::select('id', 'name')->get();
        $this->statuses = collect(ArticleStatus::cases())->map(fn($status) => [
            'id' => $status->value,
            'name' => str($status->label())->ucfirst(),
        ]);
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Admin/Article/Index');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Article/Create', [
            'categories' => $this->categories,
            'tags' => $this->tags,
            'statuses' => $this->statuses
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ArticleRequest $request)
    {
        if ($request->hasFile('picture')) {
            $picture = $request->file('picture');
            $pictureName = time() . '.' . $picture->getClientOriginalExtension();

            // Simpan file di storage
            $picture->storeAs('articles', $pictureName, 'public');

            // Simpan file di public path
            // $publicPath = public_path('images/articles/' . $pictureName);
            // $picture->move(public_path('images/articles'), $pictureName);
        }

        $article = $request->user()->articles()->create([
            'title' => $title = $request->title,
            'slug' => Str::slug($title),
            'teaser' => $request->teaser,
            'body' => $request->body,
            'picture' => $pictureName,
            'status' => $request->status,
            'category_id' => $request->category_id,
        ]);

        $article->tags()->attach($request->tags);

        return to_route('admin.articles.index')->with('success', 'Article created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
