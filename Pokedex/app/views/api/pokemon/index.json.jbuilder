json.set! "pokemon" do
    @pokemons.each do |pokemon| 
        json.set! pokemon.id do
            json.extract! pokemon, :id, :name 
            json.imageUrl asset_path("pokemon_snaps/#{pokemon.image_url}")
        end 
    end
end