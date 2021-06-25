class CreateJoinTableUsersFitClasses < ActiveRecord::Migration[6.1]
  def change
    create_join_table :users, :fit_classes do |t|
      # t.index [:user_id, :fit_class_id]
      # t.index [:fit_class_id, :user_id]
    end
  end
end
