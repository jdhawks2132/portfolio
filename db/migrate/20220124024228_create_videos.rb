class CreateVideos < ActiveRecord::Migration[6.1]
  def change
    create_table :videos do |t|
      t.string :name
      t.string :url
      t.belongs_to :project, null: false, foreign_key: true

      t.timestamps
    end
  end
end
