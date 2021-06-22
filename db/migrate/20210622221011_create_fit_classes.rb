class CreateFitClasses < ActiveRecord::Migration[6.1]
  def change
    create_table :fit_classes do |t|
      t.string :class_name
      t.datetime :schedule_time
      t.references :studio, null: false, foreign_key: true

      t.timestamps
    end
  end
end
