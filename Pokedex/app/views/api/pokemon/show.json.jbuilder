json.pokemon do
    json.partial! 'api/pokemon/pokemon', pokemon: @pokemon
end
json.moves do 
    @pokemon.moves.each do |move|
        json.partial! 'api/moves/move', move: move
    end
end
json.items do
    @pokemon.items.each do |item|
        json.partial! 'api/items/item', item: item
    end
end
