<?php

namespace App\Http\Controllers;


use App\TimeEntry;
use Illuminate\Http\Request;

Class TimeEntryController extends Controller {

    public function index() {
        return view('time-entry/time-entries-list');
    }

    public function post(Request $request) {
        $data = array(
            'description' => $request->input('description'),
            'date' => $request->input('date')
        );

        $timeEntry = TimeEntry::create($data);

        return response(['data' => $timeEntry], 201);
    }

    public function all() {
        $timeentries = TimeEntry::all();
        return response(['data' => $timeentries], 201);
    }
}