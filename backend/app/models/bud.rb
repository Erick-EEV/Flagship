class Bud < ApplicationRecord
    belongs_to :budder, class_name: "User", foreign_key: :budder_id
    belongs_to :buddie, class_name: "User", foreign_key: :buddie_id
end
