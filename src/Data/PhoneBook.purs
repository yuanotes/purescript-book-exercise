module Data.PhoneBook where

import Data.List
import Data.Maybe

import Control.Plus (empty)

type Entry = {
  firstName :: String,
  lastName :: String,
  phone :: String
  }

type PhoneBook = List Entry

showEntry :: Entry -> String
showEntry entry =
  entry.lastName ++ ", " ++
  entry.firstName ++ ", " ++
  entry.phone

emptyBook :: PhoneBook
emptyBook = empty

insertEntry :: Entry -> PhoneBook -> PhoneBook
insertEntry = Cons

findEntry :: String -> String -> PhoneBook -> Maybe Entry
findEntry firstName lastName  = head <<<
  filter (\e -> e.firstName == firstName && e.lastName == lastName)
