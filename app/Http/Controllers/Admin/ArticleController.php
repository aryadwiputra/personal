<?php

namespace App\Http\Controllers\Admin;

use App\Enums\ArticleStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\ArticleRequest;
use App\Http\Resources\Articles\ArticleTableResource;
use App\Models\Category;
use App\Models\Series;
use App\Models\Tag;
use App\Models\Article;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ArticleController extends Controller
{
    public $tags;
    public $categories;
    public $statuses;
    public $series;
    public function __construct()
    {
        $this->tags = Tag::select('id', 'name')->get();
        $this->categories = Category::select('id', 'name')->get();
        $this->statuses = collect(ArticleStatus::cases())->map(fn($status) => [
            'id' => $status->value,
            'name' => str($status->label())->ucfirst(),
        ]);
        $this->series = Series::select('id', 'title')->get();
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $articles = Article::query()
            ->with([
                'author',
                'tags' => fn($query) => $query->select('name', 'slug', 'id'),
                'category' => fn($query) => $query->select('name', 'slug', 'id'),
            ])
            ->paginate(10);
        return Inertia::render('Admin/Article/Index', [
            'articles' => ArticleTableResource::collection($articles)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Article/Create', [
            'categories' => $this->categories,
            'tags' => $this->tags,
            'statuses' => $this->statuses,
            'series' => $this->series
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
            'picture' => $pictureName ?? null,
            'status' => $request->status,
            'category_id' => $request->category_id,
        ]);

        $article->tags()->attach($request->tags);
        $article->series()->attach($request->series_id);

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
        $article = Article::find($id);


        return Inertia::render('Admin/Article/Edit', [
            'article' => $article->load([
                'tags' => fn($query) => $query->select('id', 'name'),
                'category' => fn($query) => $query->select('id', 'name'),
                'series' => fn($query) => $query->select('id', 'title')
            ]),
            'statuses' => $this->statuses,
            'tags' => $this->tags,
            'categories' => $this->categories,
            'series' => $this->series

        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ArticleRequest $request, string $id)
    {
        $article = Article::find($id);

        if ($request->hasFile('picture')) {
            // Cek apakah ada picture sebelumnya
            if ($article->picture) {
                Storage::delete('public/articles/' . $article->picture);
            }

            $picture = $request->file('picture');
            $pictureName = time() . '.' . $picture->getClientOriginalExtension();

            // Simpan file di storage
            $picture->storeAs('articles', $pictureName, 'public');

            // Simpan file di public path
            // $publicPath = public_path('images/articles/' . $pictureName);
            // $picture->move(public_path('images/articles'), $pictureName);
        }

        $article->update([
            'title' => $title = $request->title,
            'slug' => Str::slug($title),
            'teaser' => $request->teaser,
            'body' => $request->body,
            'picture' => $pictureName ?? $article->picture,
            'status' => $request->status,
            'category_id' => $request->category_id,
        ]);

        $article->tags()->sync($request->tags, true);

        return to_route('admin.articles.index')->with('success', 'Article updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $article = Article::find($id);

        if ($article->picture != null) {
            Storage::delete('public/articles/' . $article->picture);
        }

        $article->delete();

        return to_route('admin.articles.index')->with('success', 'Article deleted successfully');
    }
}
