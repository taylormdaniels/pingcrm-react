<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class TimelineController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Timeline/Index');
    }

    public function active(): Response
    {
        return Inertia::render('Timeline/Active');
    }
}
