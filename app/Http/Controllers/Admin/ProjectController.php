<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Projects\ProjectTableResource;
use App\Models\Project;
use App\Models\Tag;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class ProjectController extends Controller
{
    public $tags;
    public function __construct()
    {
        $this->tags = Tag::select('id', 'name')->get();
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $tags = Tag::all();
        $projects = Project::paginate(10);

        return Inertia::render("Admin/Project/Index", [
            "tags" => $tags,
            "projects" => ProjectTableResource::collection($projects),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $tags = Tag::all();

        return Inertia::render("Admin/Project/Create", [
            "tags" => $tags
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            "title" => "required|string|max:255",
            "description" => "required|string|max:255",
            "duration" => "required|string|max:255",
            "demo" => "required|string|max:255",
            "source_code" => "required|string|max:255",
            "tags" => "required|array",
        ]);

        if ($request->hasFile('picture')) {
            $picture = $request->file('picture');
            $pictureName = time() . '.' . $picture->getClientOriginalExtension();

            // Simpan file di storage
            $picture->storeAs('projects', $pictureName, 'public');

            // Simpan file di public path
            // $publicPath = public_path('images/articles/' . $pictureName);
            // $picture->move(public_path('images/articles'), $pictureName);
        }

        $project = Project::create([
            'title' => $request->title,
            'description' => $request->description,
            'duration' => $request->duration,
            'demo' => $request->demo,
            'source_code' => $request->source_code,
            'picture' => $pictureName ?? null,
        ]);

        $project->tags()->attach($request->tags);

        return to_route('admin.projects.index')->with('success', 'Project created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $project = Project::find($id);

        return Inertia::render('Admin/Project/Edit', [
            'project' => $project->load([
                'tags' => fn($query) => $query->select('id', 'name'),
            ]),
            'tags' => $this->tags,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        // return $request->all();
        $project = Project::find($id);

        if ($request->hasFile('picture')) {
            // Cek apakah ada picture sebelumnya
            if ($project->picture) {
                Storage::delete('public/projects/' . $project->picture);
            }

            $picture = $request->file('picture');
            $pictureName = time() . '.' . $picture->getClientOriginalExtension();

            // Simpan file di storage
            $picture->storeAs('projects', $pictureName, 'public');

            // Simpan file di public path
            // $publicPath = public_path('images/articles/' . $pictureName);
            // $picture->move(public_path('images/articles'), $pictureName);
        }

        $project->update([
            'title' => $request->title,
            'description' => $request->description,
            'duration' => $request->duration,
            'demo' => $request->demo,
            'source_code' => $request->source_code,
            'picture' => $pictureName ?? null,
        ]);

        $project->tags()->sync($request->tags, true);

        return to_route('admin.projects.index')->with('success', 'Project updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $project = Project::find($id);

        if ($project->picture != null) {
            Storage::delete('public/projects/' . $project->picture);
        }

        $project->delete();

        return to_route('admin.projects.index')->with('success', 'Project deleted successfully');
    }
}
