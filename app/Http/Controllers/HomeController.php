<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $articles = Article::with("category")->with('tags')->paginate(9);

        return Inertia::render("Home", [
            "articles" => $articles
        ]);
    }
}
