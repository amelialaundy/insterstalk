class Google
  include HTTParty
  format :json
  base_uri "https://maps.googleapis.com/maps/api/geocode/json?address="

  def self.search(address)
    api_key = "AIzaSyBPMwfjAD5SqjAV50RXw-pLNhl_9qVZXgQ"
    self.get("#{address}&key=#{api_key}")
  end
end
