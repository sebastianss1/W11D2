json.partial! 'api/parties/party', party: @party
json.guests @party.guests.each do |guest|
    json.partial! 'api/guests/guest', guest: guest
    json.gifts guest.gifts.each do |gift|
        json.partial! 'api/gifts/gift', gift: gift
    end
end