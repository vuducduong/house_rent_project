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
        $houses = DB::table('houses')
        ->orderBy('status', 'asc')
        ->get();
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
        // dd($request->all());
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
        // $users = User::find($id);
    $images = DB::table('house_images')->where('houses_id','=',$id)
    ->get();
    $users= DB:: table('houses')
    ->join('users','houses.users_id','=','users.id')
    ->select('users.name','users.email','users.phone','users.address','users.id')
    ->where('houses.id','=',$id)
    ->first();

    $data = [
        "houses" => $house,
        "houseImages" => $images,
        "users" => $users
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
    public function update(Request $request, $id)
    {
        $house = House::find($id);
        $house->fill($request->all());
        $house->save();
        return response()->json($house);
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
        ->orderBy('status', 'desc')
        ->where('users.id','=',$id)
        ->get();
        return response()->json($list);

    }

    // public function uploadImages($id){
    //     $images = House::find($id);
    //     $images = DB::table('houses')
    //     ->join('house_images','houses_id','=','house_images.houses_id')
    //     ->select('houses.id','house_images.*')
    //     ->where('houses.id','=',$id)
    //     ->get();
    //     return response()->json($images);

    // }



    public function search(Request $request)
    {
        $search = $request->search;
        $houses = House::where('address', 'LIKE', "%$search%")->orWhere('pricePerDay', 'LIKE', "%$search%")->get();
        return response()->json($houses);
    }

    public function getHouse($id){
        $house = House::find($id);
        return response()->json($house);
    }


}
