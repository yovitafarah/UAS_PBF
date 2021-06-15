<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Http\Resources\Admin\ProductResource;
use App\Models\Color;
use App\Models\Product;
use App\Models\Size;
use App\Models\Tag;
use App\Models\Variant;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class ProductsApiController extends Controller
{
    public function index()
    {
        return new ProductResource(Product::with(['colors', 'size', 'tags', 'variants'])->get());
    }

    public function store(StoreProductRequest $request)
    {
        $product = Product::create($request->validated());

        $color = [
            1,2,3
        ];
        $size = [
            1,2,3,4
        ];
        $tags = [
            1
        ];
        $varian = [
            1
        ];

        $product->colors()->sync($color);
        $product->size()->sync($size);
        $product->tags()->sync($tags);
        $product->variants()->sync($varian);
        if ($media = $request->input('pictures', [])) {
            Media::whereIn('id', data_get($media, '*.id'))
                ->where('model_id', 0)
                ->update(['model_id' => $product->id]);
        }

        return (new ProductResource($product))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create(Product $product)
    {

        return response([
            'meta' => [
                'new'      => Product::NEW_SELECT,
                'sale'     => Product::SALE_SELECT,
            ],
        ]);
    }

    public function show(Product $product)
    {

        return new ProductResource($product->load(['colors', 'size', 'tags', 'variants']));
    }

    public function update(UpdateProductRequest $request, Product $product)
    {
        $product->update($request->validated());
        $product->colors()->sync($request->input('colors.*.id', []));
        $product->size()->sync($request->input('size.*.id', []));
        $product->tags()->sync($request->input('tags.*.id', []));
        $product->variants()->sync($request->input('variants.*.id', []));
        $product->updateMedia($request->input('pictures', []), 'product_pictures');

        return (new ProductResource($product))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(Product $product)
    {

        return response([
            'data' => new ProductResource($product->load(['colors', 'size', 'tags', 'variants'])),
            'meta' => [
                'colors'   => Color::get(['id', 'name']),
                'size'     => Size::get(['id', 'name']),
                'tags'     => Tag::get(['id', 'name']),
                'variants' => Variant::get(['id', 'name']),
                'new'      => Product::NEW_SELECT,
                'sale'     => Product::SALE_SELECT,
            ],
        ]);
    }

    public function destroy(Product $product)
    {

        $product->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }

    public function storeMedia(Request $request)
    {
        if ($request->has('size')) {
            $this->validate($request, [
                'file' => 'max:' . $request->input('size') * 1024,
            ]);
        }

        $model         = new Product();
        $model->id     = $request->input('model_id', 0);
        $model->exists = true;
        $media         = $model->addMediaFromRequest('file')->toMediaCollection($request->input('collection_name'));

        return response()->json($media, Response::HTTP_CREATED);
    }
}
