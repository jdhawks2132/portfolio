class CreateUrls < ActiveRecord::Migration[6.1]
  def change
    create_table :urls do |t|
      t.string :name
      t.string :desc
      t.belongs_to :project, null: false, foreign_key: true

      t.timestamps
    end
  end
end
