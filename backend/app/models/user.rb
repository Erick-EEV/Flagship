class User < ApplicationRecord
    has_many :members
    
    has_many :chatrooms, through: :servers

    has_many :active_relationships, class_name: "Bud", foreign_key: :buddie_id, dependent: :destroy
    has_many :budders, through: :active_relationships, source: :budder
    
    has_many :passive_relationships, class_name: "Bud", foreign_key: :budder_id, dependent: :destroy
    has_many :buddies, through: :passive_relationships, source: :buddie

end
