<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // $articles = Article::orderBy("created_at", "desc")->get();
        $articles = Article::with("category")->with('tags')->orderBy("created_at", "desc")->get();

        return Inertia::render("Article/Index", [
            "articles" => $articles
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $slug)
    {
        $article = Article::with(['category', 'tags', 'series.articles'])->where("slug", $slug)->firstOrFail();

        // Get related articles from the same series
        $relatedSeriesArticles = collect();
        foreach ($article->series as $series) {
            $relatedSeriesArticles = $relatedSeriesArticles->merge($series->articles);
        }

        // Mark the current article as active
        $relatedSeriesArticles = $relatedSeriesArticles->unique('id')->values()->map(function ($relatedArticle) use ($slug) {
            $relatedArticle->isActive = $relatedArticle->slug === $slug;
            return $relatedArticle;
        });

        // Get related articles from the same category and tags
        $categoryArticles = Article::where('category_id', $article->category_id)
            ->where('id', '!=', $article->id)
            ->limit(5)
            ->get();

        $tagIds = $article->tags->pluck('id');
        $tagArticles = Article::whereHas('tags', function ($query) use ($tagIds) {
            $query->whereIn('id', $tagIds);
        })->where('id', '!=', $article->id)
            ->limit(5)
            ->get();

        // Combine and filter unique articles
        $relatedArticles = $relatedSeriesArticles->merge($categoryArticles)->merge($tagArticles)->unique('id')->values();

        return Inertia::render("Article/Detail", [
            "article" => $article,
            "relatedSeriesArticles" => $relatedSeriesArticles->unique('id')->values(),
            "relatedArticles" => $relatedArticles,
            "hasSeries" => $article->series->isNotEmpty()
        ]);
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
