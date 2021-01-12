require "test_helper"

class BudsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @bud = buds(:one)
  end

  test "should get index" do
    get buds_url, as: :json
    assert_response :success
  end

  test "should create bud" do
    assert_difference('Bud.count') do
      post buds_url, params: { bud: { budder_id: @bud.budder_id, buddie_id: @bud.buddie_id } }, as: :json
    end

    assert_response 201
  end

  test "should show bud" do
    get bud_url(@bud), as: :json
    assert_response :success
  end

  test "should update bud" do
    patch bud_url(@bud), params: { bud: { budder_id: @bud.budder_id, buddie_id: @bud.buddie_id } }, as: :json
    assert_response 200
  end

  test "should destroy bud" do
    assert_difference('Bud.count', -1) do
      delete bud_url(@bud), as: :json
    end

    assert_response 204
  end
end
