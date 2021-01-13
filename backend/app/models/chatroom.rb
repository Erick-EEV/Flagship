class Chatroom < ApplicationRecord
    belongs_to :server
    has_many :messages
end
