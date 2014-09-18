class Instagram
    include HTTParty
    format :json
    base_uri "https://api.instagram.com/v1/media/search?"

    def self.find(lat, lng)
      client_id = "3d574041ef854a50b8af1c17ef2313fc"
      self.get("lat=#{lat}&lng=#{lng}&client_id=#{client_id}")
    end

end

