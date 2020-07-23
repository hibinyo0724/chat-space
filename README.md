# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

##  usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|index: true, null: false, unique:true|
|E-mail|string|null: false|
|password|integer|null: false|

##  Association
- has_many :comments
- has_many :groups,through:members

##  groupsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|

##  Association
-belongs_to :user
-has many :comment


##  commentsテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|null: false|
|image|string|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

##  Association
-belongs_to :user
-belongs_to :group

