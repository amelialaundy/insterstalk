class Uclassify
    include HTTParty
    format :json
    base_uri "http://uclassify.com/browse/uClassify/Topics/ClassifyText?readkey="


    def self.search(search_query)
      search_query.gsub!(" ", "%20")
      read_key = "XrYPmiEN6FRyyfIlpCr1pFb66wo"
      output = "json"
      self.get("#{read_key}&text=#{search_query}&output=#{output}&version=1.01")
    end



end
