json.key_format! camelize: :lower
json.set! item.id do
    json.extract! item, :id, :name, :price, :happiness, :image_url
end

# may want to remove lines 1 and 3 and just use 2 just in case for an items show page