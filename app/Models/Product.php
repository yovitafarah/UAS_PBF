<?php

namespace App\Models;

use \DateTimeInterface;
use App\Support\HasAdvancedFilter;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class Product extends Model implements HasMedia
{
    use HasAdvancedFilter;
    use SoftDeletes;
    use InteractsWithMedia;
    use HasFactory;

    public const NEW_SELECT = [
        [
            'label' => 'True',
            'value' => 'true',
        ],
        [
            'label' => 'False',
            'value' => 'false',
        ],
    ];

    public const SALE_SELECT = [
        [
            'label' => 'True',
            'value' => 'true',
        ],
        [
            'label' => 'False',
            'value' => 'false',
        ],
    ];

    public $table = 'products';

    protected $appends = [
        'pictures',
        'new_label',
        'sale_label',
    ];

    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $orderable = [
        'id',
        'name',
        'price',
        'discount',
        'short_details',
        'description',
        'stock',
        'new',
        'sale',
        'rating',
    ];

    protected $fillable = [
        'name',
        'price',
        'discount',
        'short_details',
        'description',
        'stock',
        'new',
        'sale',
        'rating',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $filterable = [
        'id',
        'name',
        'price',
        'discount',
        'short_details',
        'description',
        'stock',
        'new',
        'sale',
        'colors.name',
        'size.name',
        'tags.name',
        'rating',
        'variants.name',
    ];

    public function registerMediaConversions(Media $media = null): void
    {
        $thumbnailWidth  = 50;
        $thumbnailHeight = 50;

        $thumbnailPreviewWidth  = 120;
        $thumbnailPreviewHeight = 120;

        $this->addMediaConversion('thumbnail')
            ->width($thumbnailWidth)
            ->height($thumbnailHeight)
            ->fit('crop', $thumbnailWidth, $thumbnailHeight);
        $this->addMediaConversion('preview_thumbnail')
            ->width($thumbnailPreviewWidth)
            ->height($thumbnailPreviewHeight)
            ->fit('crop', $thumbnailPreviewWidth, $thumbnailPreviewHeight);
    }

    public function getPicturesAttribute()
    {
        return $this->getMedia('product_pictures')->map(function ($item) {
            $media = $item->toArray();
            $media['url'] = $item->getUrl();
            $media['thumbnail'] = $item->getUrl('thumbnail');
            $media['preview_thumbnail'] = $item->getUrl('preview_thumbnail');

            return $media;
        });
    }

    public function getNewLabelAttribute()
    {
        return collect(static::NEW_SELECT)->firstWhere('value', $this->new)['label'] ?? '';
    }

    public function getSaleLabelAttribute()
    {
        return collect(static::SALE_SELECT)->firstWhere('value', $this->sale)['label'] ?? '';
    }

    public function colors()
    {
        return $this->belongsToMany(Color::class);
    }

    public function size()
    {
        return $this->belongsToMany(Size::class);
    }

    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }

    public function variants()
    {
        return $this->belongsToMany(Variant::class);
    }

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }
}
