class AddAddressToUrls < ActiveRecord::Migration[6.1]
  def change
    add_column :urls, :address, :string
  end
end
