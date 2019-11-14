class CreateTweets < ActiveRecord::Migration[5.2]
  def change
    create_table :tweets do |t|
      t.string :name
      t.string :racket
      t.string :maker
      t.string :price
      t.string :playstyle
      t.string :text
      t.text :image
      t.timestamps
    end
  end
end
