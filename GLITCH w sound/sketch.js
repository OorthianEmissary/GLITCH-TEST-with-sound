var rr1;
var rr2;
var rr3;
var rr4;
var song;
var on = false;

var WELCOME = ["W̛̪̪̮̟͉̝͉̥͉̦͚̰͚͈͔ͨ̈͋̔̀̍̌̇ͪ́͑ͮ̀ͅͅE͗̄̄̅̏ͫͪ̆̉ͨ͏̴̣̣͎̪͟L̵̴̼̤̥̗̻͈̺̠̜̺̥͚̩̞̘̼͔̙̑ͣ̄ͬ̑̍̒ͥ̋̌ͣ͂͊͜͜͟C̷͍̜̹͔̺̗̠̗̮̫̥͈͎͚̱͎̠͍̯͐̃ͣ͗̎͊ͭ̍ͮͦ̃̎̍̎ͬ́ͬͧ͟͜͞͞O̷͎̗͖͇̳̫̤͉̯̫ͨ̓̂̓͢ͅͅM̴̢̡̫̭̬̞͈̟̞̣̲̗̗͇̔͐͑̂̅̓ͧͯ͊̅̎͢ͅE̢̻̖̼̯̮̗͌ͧͫ̓̎͒ͭ͊̓̽͐͘͟͝", "W̶̨͓̱͔͇̤̰̫͉̬̩ͮͭ͂̇̐͛ͩ̄͜͟E͚̣̼̦̼̩̝̱̼̗͊̓ͥ̂͑̄̆͒́̓ͤ͠͡L̴̵̜͎͔̮̳͚͈̻̳̟̥͔͚̇̐ͩ̔͌ͅC̽̐ͭ̇́ͩ̑̚҉̪̜̘͙̰̻̼̖̭̗̗͙̲̮̘̜̩̺͠Ǒ̶̴̵͎̗̲̱̺̯͔͍͍͕̰̠̬͖̖ͪ̍̍ͤ͑̈́̾̀̚͠M̸̫̠̣̩̝͉̲̖͓͙̠̰͇̥͍̖͖͚͉͗ͨ̐̉ͯ̑͘͘͢Ȩ̱̣͔͇̝̦̘̗̮̌͐̿ͮ͐̆ͤ̋͌̌̂̓̈̓̀ͭ̈̂͡͞", "W̢̘̗̥̼͇̙̙̭̬̔ͪ̒ͪ̇̈́̍̒̆̓͂͞Ẻ̅ͮͧ̿̎̉ͪ̆̍̇͞͏̵̡̺͔̩̦̭̟͔̟̼̹̟̪̥̰̣̱͡ͅͅL̢̼̦͚̞͉̱̼͚̱͙̦̟͙̹̪̽̈͑ͭ̅ͨ͂ͫͤ̋͗̐͛̕C̵̶͇̻̮̖̯̄̈͂̾̓̋͛ͭ͝O̶̧̙͔͙̭̱͖̭̲̳͓̰̥͉̲̬̥̽̽̓ͭ̽͊̽̋͌̆̀͗̈̓̚̕ͅM̵̛ͩ͊͋͂͌̃ͨ͒̾ͦ̓̓ͪ́̚͏̮͚̳̞͖͚̥̩̥̟̭̫͓̺̮̙̠E̶͊́̽̿̂̓̂̃̽̓ͩ̑̏͂ͤ̓̽̇͝͏̘͎̠̼̭͚̯̱̣̫ͅ", "W̢̘̗̥̼͇̙̙̭̬̔ͪ̒ͪ̇̈́̍̒̆̓͂͞Ẻ̅ͮͧ̿̎̉ͪ̆̍̇͞͏̵̡̺͔̩̦̭̟͔̟̼̹̟̪̥̰̣̱͡ͅͅL̢̼̦͚̞͉̱̼͚̱͙̦̟͙̹̪̽̈͑ͭ̅ͨ͂ͫͤ̋͗̐͛̕C̵̶͇̻̮̖̯̄̈͂̾̓̋͛ͭ͝O̶̧̙͔͙̭̱͖̭̲̳͓̰̥͉̲̬̥̽̽̓ͭ̽͊̽̋͌̆̀͗̈̓̚̕ͅM̵̛ͩ͊͋͂͌̃ͨ͒̾ͦ̓̓ͪ́̚͏̮͚̳̞͖͚̥̩̥̟̭̫͓̺̮̙̠E̶͊́̽̿̂̓̂̃̽̓ͩ̑̏͂ͤ̓̽̇͝͏̘͎̠̼̭͚̯̱̣̫ͅ", "W̨̳̝͈̩͉͖̱̳̥̯͉̙̦̮̦̙͉̃ͪͩ̀͜ͅE̴͌̅̒̄̑̇̀̉͐ͫ̊̑ͥ͊͌̈ͭ̀͝͏͓͍̦̠͓͎͚̖̟͓͎̭̬͙ͅL̢̘̘̗̖͙̖͕̖͇̙̱̺̝̹̝̜̹̖̫͐ͬ̓ͯ̌͑̿̒ͬ͘͟C̷̿ͭ̅͂͑̅͆͌̐͗̓ͦ̉͋ͥ͒̌͐͐҉͏͔͔̞͍̘͓͙̰̬̝͙̼̻͎̰O̴ͫͧͤ͑̔̍ͦ͒͂́͜͞҉҉̜̻͓̤ͅM͌ͣͨ̑ͩ̊ͫ͏̵͔͔̣̯̳̭̞͚̬̮̀ͅE̴͍͈͓̠͙̳̳͚ͫ͌̒ͨͤ͑̓̄̉̽͂ͨͣ͊̄͠͠ͅ", "W̠͚̭̪̻̱͓̬̹͇̗͕̠̣̓͌̏̇̈ͧ̽ͪ̈̉ͪͬ͌͝͠E̴̡̮̦̺̦̜͇̹ͩ̈̉ͧ̂ͯ̑͂̉̏͒ͮ̾͂̍̈́̚̚͡ͅĻ̵̢͎̦͕̹̞̫̭͎̗̗͈̭̭̱̭̀̓̽ͥ̄ͥͪ̑͆̓̀̈́͌̔̆̚͟ͅC̵͖͔͍̘̪͍̣͇͇̜͉̹̤̺̖̥̄ͭ̌͂͋̊́̚͢͢Ő̵̼͓̗͙̹̬͓͇̰͑̈̂̀̅̓̓͂ͮͧͧ͘͢M̵̶̷̧̩̹̞͈̭̲̜̱̞̲̟͕̮̱̪̯̎̅̄ͨ͘E̴̲͙̜̘̦̬̞̘͖̻͗͊̄̈́͐͋͋ͪ̈́̐́ͪ̊̂̀" ]







var ClickMe = ["C͇̼̣̪̤͎͙̥͇͈̓̒̈́ͭ̑̑͑̌̌͂ͥ̂͂̏ͥ͗͘Ļ̣̹͎̻̞͍̟͇̥̳͓̮̅̔̽͊̾ͨ̆͟͡I̶̸̷̡̫̘̟̗͇̼̩̹͇͊ͣ̓̋͑̌̅̎̚͝C̶̨̛̹̮̟̪̤̼̪̝͓ͣ͂̇̓̒ͦ̇̽́̑̔̓̅ͣ̈͌ͫͮ̊̀K̷͔̩̮̩̭̪̬̦̜̪̼͙͖̰̤̰̜͎̣̊̄ͯ̈́̈̌͟͟͠T̅͋̄̍̿̿ͫ̓̓̓̀ͯ҉̵͖̻̳͎̙̳͙͉̥͚̣̲̠͓͔̀ͅḨ͔̩̩̪̘̙̫̭̩̾ͬ̂̎̍͑̉́̕ ̶̪̥̩͖̦͓̪͉͔̠͔͉̬̱͕̙̠̱͔͊ͪ́ͩ̆̑̄̚͘͟Ǫ̪͎̗̫͚̱̦́̐ͮ́̈͊͘N̷̨͇͎̜͉̩̼̠͉̙̏̓ͧͮ̄̉̓̃ͭͩ̔͒̀͋̉́͗ͤͩ ̷̷̣̘̖͉͚̃̆ͭ̀͘͠T̰̫͚͕̰̦̦̙̗͔̼̜̝̒̔̾ͯ̐ͩ͒͆ͭͪ̂̀̄̆͑͗̒̇̚͘H̢ͯ͒̓͑̔ͯͥ̓̉̔̀̓̂̏̃҉̡͕͔̠͕͈̲̼̘̞̠̪̟̘͉͕̞̝̜͜E̛͙̮̦̣̜̱̼̤͎̬͍̩̦ͨ͛͆́́ͨ͛͟͠͝ ̸ͯ̆̍ͣ̒͆̀ͭ̀͛ͮ̽́͋̓͢͞͏̢̬̣̣͉͚B͇̗̼̣̪̭͍̫̳͕̺͓͓̳̭̼̣̖̈́͆̐̄ͣ̃̉̉̉̏̇͂ͥ̽͞͠ͅǪ̛̬̱̘̻̞̱̭̹̝̗͕̬͍̙̈ͭͯͫ̈́̐̒͋͌͆̅̎͆ͧ͌͘͝Ẍ̢̗̤͙̟͓̟̮̬̲̹͇̭͇͕͎̖̹̥͇́ͮ̒̉ͦͥ̆̏͛̂͗̄͊ͬ́", "C̡̓̑̈́̂͂ͩ͛ͣͤ̃ͪ̓ͥ̇ͫ̏͗̔͏͍̩̲͍͖͙͔̬̪͇̻̮͖͢Ļ̂̔ͬ̾̏ͨ̋ͬͩ̃̓͛̓̓̍̓̅̚͢҉͕͔̮̭͙͈̦̟̯̙̯͔Ĩ̴̶̝̪͚̺̱̳̼͎̻̝̘͔̜̣̞̳̮ͦͨ̌ͬ͒ͧ̍͑̂̚͘̕͡C̵̢̫̫͖̘̥̩͉̞̮̜̰̘̥̬̖̰̭͙ͬͤͬ̂ͩͪ̍̔͒̈̃̈́̿̽K̡̲̬̥͖̼̗͚̬̫̮̅̿̊ͬͩ͋̑͒̑ͫ̍̆̔͞Ṭ̢̝͚̱̹̘̥͎͕̙̹͕̱̰͓̇̄̐̅̏ͫ̍̎̋̆͛̀ͅHͮͦ̽̊ͥͥ̎́̈́̏̍̒͆̂̿͌̈̚͞҉̝̥͉͓͍̜̦̰̱̞̰ ̸̆̋͑̊ͮ͊͂̎̀ͦ̇͊ͬͯ̊́҉̢̧̛̬̪̼̣̱̭͍̮͈͚̫̙̟ͅO̡͎̗͔̜̺̩̮̱̼̘̯̭̱̲̟̱̘͔̊ͧͫͣ͐ͤ̎ͮ͟Ň̮̯̻͈͍̋̏ͫ͘̕͠ ̴̻̠̯̺̲̤͔̜̠̙̹̱̲͚̱ͮ̊̉͗̋ͩ̆̾̒͊͋̎ͮ͌̐ͥ́ͮ͑͢T̡̝͕̙̠̗̼̈̔ͮ̓͊ͨ̐͆̓͊̈́͜͡͡Ḧ̴͇͖̻͕̼̩͚̦́ͥͩͥ̓͠ͅE̷̮̟̙̮͚̙̗̯̜͎̖̾ͣ͋̈̂̾ͫ͢ ̅ͮ̌̀̒҉̴͚͉̪͚̠̟̹̘̞̬̰̟̬̣̜̀B̩͉̺̬͖̝̄͊̀ͪ̄̽̌̆ͭ̓ͭͫ̾ͣ̚̚͝͞Õ͋͗̄͂ͫ͌͊ͧ̎́̚҉̰͕͍͍̞̙̹̯͎͙̖͍͍͞ͅͅX̶̡̠̲̙͖̞͕̣̦̙ͤͯͣ̈͊̚͘͘͡", "C̨̰͇̝͙̫̫͇͎̞͚͙̲̦͚͕̍ͬ͗̉ͩ͛͊ͤͧͣ̈͜Ḷ̛̣̼̗͔̯̤͕̟̣͍͎̙̖̟̖ͥͤ͗̃̅̌̋̄ͣ̾̇̽̾I̋̅̓̽̇͒̆͑̔̀̈́̽͂̇̄̊̐ͦ͑͡͏̴͈͉̯̖̬̮͖͉͕͙̙̥͔̭̮̯̮̹̙Ç̪̖̹̝̘̜̞̞͙̘̻͔͎̪ͭ̍ͣ̿̑ͪ͡K̨͔̳̗̺̺͎̹̯̹̪̲̪͈̑͌̇ͪͭ̍ͬ̏́́͘͞T̡̟̤͓̮̦̝̲̠͕̖̤̲̙͎̲̖͔ͮ̽̇̈ͬ̃̆ͣ͒͘H̵̺̗̼̞̜̖̮̘̦̬͓͚ͪ̏̑̓ͨ̋̃̌ͤ͆ͮͧͮͪ̿ͯ̕̕͞ͅ ̵͚̘̮̜̙̼̲͎̥̦̜̙̺̰̪̥̳̩̬̊̉̄ͯ͗͗̉́͞͠Ȯ̴̹͓͍̣͖̐ͬ̈͞͝N̸̶͍̜̻͕̤͕̦̻̗̹͔̫̮̪͔̪̭ͮͥͤ̏̏ͩ̾ͬ̾̓ͥ̆͌̏ͣͥ́͢͡ͅͅ ̷̢̜͍̹̻͇̽͆̃ͣ͑̌ͧͫͤ̏ͫ͘͜T̷̵̴͕̪̭̩̞̙̜̠̹̙̻̼̠̄͂ͬ͛͆̈́͑ͫ̆͢ͅH̸̵͔̦͉̻̩̹͂ͪ̆̈́ͮ͂ͥͬ́͢Ȩ̗̼̫͚͙̪͈̥͓̲̮͉̙̼͖͆̈́̓ͣ͂̎ͫ͑ ̡̡̆͌ͥͥ̍̑͐͂ͫ̇̌ͪ̓ͥͩ̚҉̱̹̖̟̬̣̣͜͞B͆̊̌͐ͩ͐͜҉̦͖̥̝̖̞̹̜̞̯͚͙͍͕̰͜ͅO̸̢͔͍̖̟̻͑͆͛̈́͡Xͧ̍ͭ͂̏̅̀̓ͦ͡҉̨̰͕̩̳̝̰" ]







var ERROR = ["E̶̴̴̴͌͗̆́̍ͪ̑ͩ̒ͥ̉̿͛̌͏̺̟͎̹̙̜͕Ŗ̵̗̗̱̳͓͓̻̑ͤ͊̔͢͠R̢̢͕͎̘̰̪̲̱͕̥͙̥̻̯̰͖͓̱͇͑͗͑̔̏̅̌́̿̀̕͠Ỏ̵̧̪̜̗̱̦̞̼͒̇̋͛ͣ́̌̐̉̚R̶̯̘̭̟̤̝̫̟͎͛ͭ̈ͯ̀̈͠", "E̷̵̲͇̘̜̫͔̦̝̳͇̤̣̲͔̞̼̫̓͗̄ͮ̔ͯͪ͘͢R̴̡̦̜̦̦̿ͥ̒̉̄̓ͭ͠R̵̨͋ͬ̓ͥ͒́҉̳̹̤̜͔̭̻̮̬͔̫̠̹̘̭ͅO̭̝͖͎̮̣̘̗̞͈̰͉͉̼̜̬̪ͣͯͦͯͥͮ̈͊͑͛ͥ̀͟Ŗ̴̞̼̙͈̩̣̱̱̖͉͙̗͍͇͍̬̲̑̑̾̂́̑", "E̸̻̻̮̯̣̯͚̼ͤͤ̒ͣ̔̔̓̋̒̍́͑͛̏̊ͫ̿͛́͡R̸̸͍͇͚͎͋͋̋̍̐̏̇̃͋̓̏͛̓̿̌̀̽̇̅R̲̗̠̼̆ͤͨͪͧͮ̑̓̕͠Ȯ̢͕̜͉̮̬ͧ̔ͦ͢͞͠R̶͖̥͚͗̆ͦ̓ͬ̏ͥ̃̇ͤͦ́̄ͭ̾͡", "E̸̶̼̭̥̪̖͖̳̮͉ͭͪ͌͌ͭ̆̔ͬͫ̍̓̇̂͆ͩ̂̚R̷̩͔̤̼̊̄ͣͪͫ̇̓ͮ̓ͪ̄ͤͩ̉̍ͫ̐̎͠R̶̺͓̥̭̰͙͒ͮ̇ͯ̆̈́ͫ̐ͦ̈́̾͜O̶̬̙̱̪̺̦̹̰̟̙̯ͮ͗̉͂̀ͣ̑͛͆̒̕͠ͅR̴͈̗͉̰̯̩̣̰ͩ̍͛̒̐̂̍́̌͗ͨͧͥ̊͛́̕͢͝ͅ" ]





var LEAVE = ["Ļ̵̩͉̻̖̫͚̬͈͉̙̳͉͔͉̞̠͔̺̏̐ͬ̇͊͂̀ͦ̌ͨͥͨ͝͡Ȩ͔̲̗̥͎͇͈̠͎͍̘̠̜̯̾̒͛̔͛͜A̸̪̬̟̮̙̙͔͇̹̠̱͔̼̤ͦͯ͐̄̌̊̅̈͋̒̉͢V̶ͯ̿̽͒̔͂ͨͥ̐ͫ́҉҉̣͎͔̞̟̲̞̠̲̭̻̟̩͘ͅͅE̛̥̥͖̭͕̜͊̄̑̏ͨ͛͂̅̀͜͜͜ ̛̆͑̃͛̍҉͏̖̭̜̙̦͙͙͓̜̩͔͟N̖͚̦̥̰̩͓̺̥̥͈̙̩ͩͨ̇ͤ͂̉̈́̓̚͢ͅͅͅÖ̶̰̥͉̣̗͓͉͙̖̰̖̤̜͍͍ͤͪ́̊̏̆́̔̇͆͢͟͢W̷͖̳͈̰͍̙̬̼̜͚̠̉͑̎̎ͭ̂͆̃͛̉̐̏ͥ̾̅ͮ̈́́̚̚", "L̶̜͖̘̺̏ͦ͋̏͢É̛̺͙̖̲̳ͨ̈́̅ͬ̉̓̆ͨ̍́͟͡ͅA̶̡̞͙͔͉̭̘̞͇̬̹̦͕͚͎̯̭͇̘͊̇̓ͤ̂̃̃̽ͦ̚͢͝V̸̧̛̙̦͍̭̬̮͍̮͔͙̥̝̖͔̌ͣ̋̏ͤͥ̈́̑ͣ̚E͑͒̾ͨ̓͋̕̕҉̶͉̱̜̲̰̰̝̭̙͉̟̹͉͜ ̛̘͈̩̱̱̬̫̭̖̫̖̼͎͍̬̥̤̯ͥ̏̎̌̔ͩ͢͠͠ͅÑ̢̨̦̤̟̖̪̟̬͍̯̳̪̝̹̠͉̯͉ͪͩ̑́̍̑̿̏̔ͭ͞O̴ͮ̃̎̇͐̆̈́̉ͫͦ͌͌̓ͫ̌͜҉̳̮̙̦͚̯̲̰̙́ͅW̓ͮ͋̎ͯ̉̍̃̈́̃҉҉̠̟̥̮͇̗̜͕͈̭̣̤̮͉̗͔", "L̷̶͙̪̘̰̹͓̹̫̫̮̭̮̦̜͇̤͗̈̐ͯ̽ͬ̉̿ͨ̊̿̔͒̅̑́̚̕͡Ȩ̛͕̫͎͎̫̝̟̱͕̿̔͋͋͗͟͟ͅẠ̡̬̣̲̮̹͔͍͕͇̬̘̅̃͋͑̋̈̓ͭ̈̀V̽̎̽̂́͏̶̣̣̺̣̞̳̼͈̫͖͖̩̮͙̫̩͉̖̮E̡̜̰͇̟̣ͣͦ͋ͩ͑͌̔ ͇͎̳̠͉̭̼̪̟̦̞̦̫̓̅͒̃ͯ̈́͒͗̀̈ͮ̽͌͛̐ͪ̕Ṇ̨̨̣̫̰̪͚̩͖̦̯̌̀ͩ͌̓ͮ͒̈͒̎̄̚͝͝Oͫ̃ͤ̿̅̄ͨ̐͂̈͊̎͗̊͒͒̓ͨ͟͢͠҉̫̻̪̳͕̰̼͕͎W̒ͬ̑̾ͮ́ͭͦ͐͏̶̧̡̯̯̜̯̝̟̟͔̞̗̭̤̣̳̼̲̱͢", "Ĺ̢̡ͯͫ͛͒̌̀ͫ̀͠҉̣̥̭Ę̢̛̻̜̰̘͗̈́̓̓̎́͠A̸ͮͭ͒͌͆́̊͂̿̚҉̴̤̰͇͇͖̲̺̩̟̫͈̝̟͎̬͇̯̮̘V̸̴̩̗̼̩͈̙̤̇ͦ̎ͭͥ̏́E̴̟̯̩̥̖͔̤̦̩̣͑͑ͧ̉̌͂̚͜͟͡ ̸̸̬͙͉̭̈́ͥ̿̉̈͐̔̆ͦͥͧ̓̅̎ͣ̒̅ͫ͆͘͡N̡̤̳͓̳̦̺̪̠̺̦̰̩͙̰͛̀̊ͬͩ̂͗͐͂ͬ͋͠͝Ơ̡̜̞̞͈̮͚̙̱̰̝̞̯͈̺̪̗̾ͧ̈́͆̀̌̾̊̚̚̚W̸̞͇̪͎̳̱͍̫̤͓̬̥ͫ̋͌̐̋" ]





function preload() {
    song.loadSound("MACINTOSH.mp3")
}

function setup() {
    createCanvas(800, 800);
    background(0);
    song.play;
    console.log("Hello World");
}


function draw() {

    rr1 = random(225);
    rr2 = random(225);
    rr3 = random(800);
    rr4 = random(800);
    
    stroke(rr1);
    fill(rr1);
    line(rr3, 0, rr3, height);
    line(0, rr4, width, rr4);
    stroke(0);
    strokeWeight(3);
    fill(160);
    rectMode(CENTER);
    rect(400 + random(2), 400 + random(2), 400, 200);
    textSize(20);
    text(random(WELCOME), 350 + random(2), 415 + random(2));
    text(random(WELCOME), 450 + random(2), 415 + random(2));
    text(random(WELCOME), 250 + random(2), 415 + random(2));
    fill(random(255));
    text(random(ClickMe), random(-50, 800), random(-50, 800));
    
    if(on){
        fill(255, 0, 0)
        text(random(ERROR), random(-50, 800), random(-50, 800))
        text(random(LEAVE), random(-50, 800), random(-50, 800))
    }
}


function mousePressed() {
    on = true
    
}
