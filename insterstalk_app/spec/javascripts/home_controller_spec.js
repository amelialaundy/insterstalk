describe("HomeController", function() {
  it("initiates a new InstagramSearchObject when called", function() {
    my_controller = new HomeController();
    expect(my_controller.instagramSearch).toBeDefined();
  });

  it("initiates a new GoogleMapLocationSearchObject when called", function() {
    my_controller = new HomeController();
    expect(my_controller.googleMapLocationSearch).toBeDefined();
  });

  it("initiates a new UclassifySearchObject when called", function() {
    my_controller = new HomeController();
    expect(my_controller.uclassifySearch).toBeDefined();
  });

  it("initiates a new View object when called", function() {
    my_controller = new HomeController();
    expect(my_controller.view).toBeDefined();
  });




});
