describe "the search location process", :type => :feature do
  before :each do
    User.make(:email => 'user@example.com', :password => 'caplin')
  end

  it "signs me in" do
    visit '/'
    within("#search") do
      fill_in 'location', :with => '15 walter street te aro'
    end
    click_button 'search'
    expect(page).to have_content '#map'
  end
end
