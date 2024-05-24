<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Series\SeriesTableResource;
use App\Models\Category;
use App\Models\Series;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;

class SeriesController extends Controller
{
    public $categories;
    public function __construct()
    {
        $this->categories = Category::select('id', 'name')->get();
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $series = Series::query()
            ->with([
                'category' => fn($query) => $query->select('name', 'id')
            ])
            ->paginate(10);
        return Inertia::render("Admin/Series/Index", [
            "series" => SeriesTableResource::collection($series),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("Admin/Series/Create", [
            'categories' => $this->categories
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'category_id' => 'required|exists:categories,id',
            'picture' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'title' => 'required|string|max:255',
            'description' => 'required|string',
        ]);

        if ($request->hasFile('picture')) {
            $picture = $request->file('picture');
            $pictureName = time() . '.' . $picture->getClientOriginalExtension();

            // Simpan file di storage
            $picture->storeAs('series', $pictureName, 'public');

            // Simpan file di public path
            // $publicPath = public_path('images/series/' . $pictureName);
            // $picture->move(public_path('images/series'), $pictureName);
        }

        Series::create([
            'category_id' => $request->category_id,
            'picture' => $pictureName ?? null,
            'title' => $title = $request->title,
            'slug' => Str::slug($title),
            'description' => $request->description,
        ]);

        return to_route('admin.series.index')->with('success', 'Article created successfully');
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
        $series = Series::findOrFail($id);

        return Inertia::render('Admin/Series/Edit', [
            'series' => $series->load([
                'category' => fn($query) => $query->select('id', 'name')
            ]),
            'categories' => $this->categories
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'category_id' => 'required|exists:categories,id',
            'picture' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'title' => 'required|string|max:255',
            'description' => 'required|string',
        ]);

        $series = Series::findOrFail($id);

        if ($request->hasFile('picture')) {

            // Cek apakah ada picture sebelumnya
            if ($series->picture) {
                Storage::delete('public/series/' . $series->picture);
            }

            $picture = $request->file('picture');
            $pictureName = time() . '.' . $picture->getClientOriginalExtension();
            $picture->storeAs('series', $pictureName, 'public');
        }

        $series->update([
            'category_id' => $request->category_id,
            'picture' => $pictureName ?? $series->picture,
            'title' => $request->title,
            'description' => $request->description,
        ]);

        return to_route('admin.series.index')->with('success', 'Series updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $series = Series::findOrFail($id);
        // Hapus picture
        if ($series->picture) {
            Storage::delete('public/series/' . $series->picture);
        }

        // Hapus article yang berelasi
        $series->delete();

        return to_route('admin.series.index')->with('success', 'Series deleted successfully');
    }
}
