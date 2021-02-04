<?php

namespace App\Http\Controllers;

use App\Models\House;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class HouseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $houses= House::all();
        return response()->json($houses);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $myHome = new House();
        $myHome->fill($request->all());
        $myHome->save();
        return response()->json($myHome);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\House  $house
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $house = House::find($id);
    $images = DB::table('house_images')->where('houses_id','=',$id)->get();
    $data = [
        "houses" => $house,
        "houseImages" => $images,
    ];
    return response()->json($data);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\House  $house
     * @return \Illuminate\Http\Response
     */
    public function edit(House $house)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\House  $house
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, House $house)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\House  $house
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
       
    }



    public function myHomeList($id)
    {
        $list = User::find($id);
        $list = DB::table('users')
        ->join('houses','users.id','=','houses.users_id')
        ->select('users.name','houses.*')
        ->where('users.id','=',$id)
        ->get();
        return response()->json($list);

    }
}
