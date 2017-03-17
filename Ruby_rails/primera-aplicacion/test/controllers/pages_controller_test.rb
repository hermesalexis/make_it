require 'test_helper'

class PagesControllerTest < ActionController::TestCase
  test "should get hola" do
    get :hola
    assert_response :success
  end

end
