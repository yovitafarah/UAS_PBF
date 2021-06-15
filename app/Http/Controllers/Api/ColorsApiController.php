<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreColorRequest;
use App\Http\Requests\UpdateColorRequest;
use App\Http\Resources\Admin\ColorResource;
use App\Models\Color;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ColorsApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('color_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new ColorResource(Color::advancedFilter());
    }

    public function store(StoreColorRequest $request)
    {
        $color = Color::create($request->validated());

        return (new ColorResource($color))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create(Color $color)
    {
        abort_if(Gate::denies('color_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [],
        ]);
    }

    public function show(Color $color)
    {
        abort_if(Gate::denies('color_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new ColorResource($color);
    }

    public function update(UpdateColorRequest $request, Color $color)
    {
        $color->update($request->validated());

        return (new ColorResource($color))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(Color $color)
    {
        abort_if(Gate::denies('color_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new ColorResource($color),
            'meta' => [],
        ]);
    }

    public function destroy(Color $color)
    {
        abort_if(Gate::denies('color_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $color->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
