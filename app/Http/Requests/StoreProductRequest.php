<?php

namespace App\Http\Requests;

use App\Models\Product;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;
use Illuminate\Support\Arr;

class StoreProductRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name' => [
                'string',
                'required',
            ],
            'price' => [
                'numeric',
                'required',
            ],
            'discount' => [
                'string',
                'nullable',
            ],
            'short_details' => [
                'string',
                'nullable',
            ],
            'description' => [
                'string',
                'nullable',
            ],
            'stock' => [
                'integer',
                'min:-2147483648',
                'max:2147483647',
                'required',
            ],
            'new' => [
                'required',
                'in:' . implode(',', Arr::pluck(Product::NEW_SELECT, 'value')),
            ],
            'sale' => [
                'required',
                'in:' . implode(',', Arr::pluck(Product::SALE_SELECT, 'value')),
            ],
            'colors' => [
                'array',
            ],
            'colors.*.id' => [
                'integer',
                'exists:colors,id',
            ],
            'size' => [
                'array',
            ],
            'size.*.id' => [
                'integer',
                'exists:sizes,id',
            ],
            'tags' => [
                'array',
            ],
            'tags.*.id' => [
                'integer',
                'exists:tags,id',
            ],
            'rating' => [
                'string',
                'required',
            ],
            'variants' => [
                'array',
            ],
            'variants.*.id' => [
                'integer',
                'exists:variants,id',
            ],
        ];
    }
}
