class Server < ApplicationRecord
    has_many :chatrooms
    has_many :members
    has_many :users, through: :members
end
