# tennis-Talk! DB設計
・開発環境
（Ruby/Ruby on Rails/Javascript/MySQL/Github/AWS/Visual Studio Code）

### ・トップページ（テニスラケットレビュー一覧表示）

![image](https://user-images.githubusercontent.com/55436678/72321597-a6ae2f80-36e7-11ea-93b6-723401f869ec.png)


### ・テニスラケットレビュー投稿
ログイン後、トップページの投稿ボタンをクリックし、投稿画面で必要項目を入力すると、レビューを投稿することが出来る。

![image](https://user-images.githubusercontent.com/55436678/72321888-600d0500-36e8-11ea-9267-89744dd3cd69.png)


### ・ラケット詳細ページ
トップページのラケット名をクリックすると各ラケットの詳細ページを表示する。

![image](https://user-images.githubusercontent.com/55436678/72322107-d7429900-36e8-11ea-9eae-7e9d06ef92f8.png)

### ・レビュー、編集、削除機能
ラケット詳細ページから投稿したレビューの編集、削除が可能。

### ・レビューコメント機能
ラケット詳細ページのコメント欄で閲覧者がコメントを投稿出来るようになっております。

### ・アマゾンへのリンク
ラケット詳細ページのアマゾンロゴをクリックすると、アマゾンリンクへ飛ぶことが出来る。

### ・商品検索（インクリメントサーチ実装）
トップページの検索画面にラケット名を入力することで、検索が可能。インクリメントサーチで文字を打つたびに候補を表示します。

![image](https://user-images.githubusercontent.com/55436678/72322628-25a46780-36ea-11ea-9c42-fcc503f983eb.png)



## userテーブル
|column|Type|Option|
|------|----|------|
|nickname|string|null: false|
|email|string|null: false|
|password|string|null:false|


### Association
- has_many :tweets
- has_many :comments
 


## tweetテーブル
|column|Type|Option|
|------|----|------|
|racket|string|
|maker|string|
|price|string|
|playstyle|string|
|text|string|
|image|text|
|user_id|integer|

### Association
- belongs_to :user
- has_many :comments

## commentテーブル
|column|Type|Option|
|------|----|------|
|user_id|integer|
|tweet_id|integer|
|text|text|


### Association
- belongs_to :tweet
- belongs_to :user



