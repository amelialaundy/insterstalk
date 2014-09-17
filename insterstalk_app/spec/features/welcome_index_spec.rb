describe "the search location process", :type => :feature do
  it "searches for a location" do
    visit '/'
    within("#search") do
      fill_in 'address', :with => '15 walter street te aro'
    end
    click_button 'search'
    expect(page).to have_content 'Walter'
  end
end
