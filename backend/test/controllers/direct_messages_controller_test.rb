require "test_helper"

class DirectMessagesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @direct_message = direct_messages(:one)
  end

  test "should get index" do
    get direct_messages_url, as: :json
    assert_response :success
  end

  test "should create direct_message" do
    assert_difference('DirectMessage.count') do
      post direct_messages_url, params: { direct_message: { buddie_id: @direct_message.buddie_id, text: @direct_message.text, user_id: @direct_message.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show direct_message" do
    get direct_message_url(@direct_message), as: :json
    assert_response :success
  end

  test "should update direct_message" do
    patch direct_message_url(@direct_message), params: { direct_message: { buddie_id: @direct_message.buddie_id, text: @direct_message.text, user_id: @direct_message.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy direct_message" do
    assert_difference('DirectMessage.count', -1) do
      delete direct_message_url(@direct_message), as: :json
    end

    assert_response 204
  end
end
