import { Injectable } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';

@Injectable()
export class GamesService {

  private games = [
    {
      date: "2023-08-13",
      match: [
        {
          teams: ["Team A", "Team B"],
          scores: [16, 9],
          players: [
            ["Will", "Sauce", "Rodger"],
            ["Lateef", "Victor", "John"],
          ],
        },
        {
          teams: ["Team A", "Team C"],
          scores: [11, 7],
          players: [
            ["Will", "Sauce", "Rodger"],
            ["Elias", "Toyosi", "Ahmed"],
          ],
        },
        {
          teams: ["Team A", "Team D"],
          scores: [1, 11],
          players: [
            ["Will", "Sauce", "Rodger"],
            ["Quam", "Alex", "Victor"],
          ],
        },
        {
          teams: ["Team D", "Team E"],
          scores: [11, 9],
          players: [
            ["Quam", "Alex", "Victor"],
            ["Wale", "Steve", "Lateef"],
          ],
        },
        {
          teams: ["Team D", "Team F"],
          scores: [8, 11],
          players: [
            ["Quam", "Alex", "Victor"],
            ["Ahmed", "Toyosi", "Wale"],
          ],
        },
        {
          teams: ["Team F", "Team G"],
          scores: [11, 6],
          players: [
            ["Ahmed", "Toyosi", "Wale"],
            ["Elias", "Rodger", "Sauce"],
          ],
        },
        {
          teams: ["Team F", "Team H"],
          scores: [6, 11],
          players: [
            ["Ahmed", "Toyosi", "Wale"],
            ["Steve", "Alex", "Quam"],
          ],
        },
      ],
    },
    {
      date: "2023-08-20",
      match: [
        {
          teams: ["Team A", "Team B"],
          scores: [12, 16],
          players: [["List not available"], ["List not available"]],
        },
        {
          teams: ["Team B", "Team C"],
          scores: [11, 9],
          players: [["List not available"], ["List not available"]],
        },
      ],
    },
    {
      date: "2023-08-27",
      match: [
        {
          teams: ["Team A", "Team B"],
          scores: [7, 11],
          players: [
            ["Sam", "Lateef", "Rodger"],
            ["Sauce", "Will", "Dariel"],
          ],
        },
        {
          teams: ["Team B", "Team C"],
          scores: [11, 6],
          players: [
            ["Sauce", "Will", "Dariel"],
            ["Tunde", "Ahmed", "Victor"],
          ],
        },
        {
          teams: ["Team B", "Team D"],
          scores: [11, 8],
          players: [
            ["Sauce", "Will", "Dariel"],
            ["Micheal-Obaokiki", "Steve", "Wale"],
          ],
        },
        {
          teams: ["Team B", "Team E"],
          scores: [11, 2],
          players: [
            ["Sauce", "Will", "Dariel"],
            ["John", "Korede", "Adolo"],
          ],
        },
        {
          teams: ["Team B", "Team F"],
          scores: [9, 11],
          players: [
            ["Sauce", "Will", "Dariel"],
            ["Quam", "Alex", "Sam"],
          ],
        },
        {
          teams: ["Team F", "Team G"],
          scores: [6, 5],
          players: [
            ["Quam", "Alex", "Sam"],
            ["John", "Lateef", "Rodger"],
          ],
        },
        {
          teams: ["Team F", "Team C"],
          scores: [4, 11],
          players: [
            ["Quam", "Alex", "Sam"],
            ["Tunde", "Ahmed", "Victor"],
          ],
        },
        {
          teams: ["Team C", "Team D"],
          scores: [7, 4],
          players: [
            ["Tunde", "Ahmed", "Victor"],
            ["Micheal_Obaokiki", "Steve", "Wale"],
          ],
        },
      ],
    },
    {
      date: "2023-09-03",
      match: [
        {
          teams: ["Team A", "Team B"],
          scores: [12, 13],
          players: [
            ["Sauce", "Will", "Rodger"],
            ["AJ", "Lateef", "CJ"],
          ],
        },
        {
          teams: ["Team B", "Team C"],
          scores: [11, 5],
          players: [
            ["AJ", "Lateef", "CJ"],
            ["John", "Johnny", "Victor"],
          ],
        },
        {
          teams: ["Team B", "Team D"],
          scores: [4, 11],
          players: [
            ["AJ", "Lateef", "CJ"],
            ["Ahmed", "Wale", "Quam"],
          ],
        },
        {
          teams: ["Team D", "Team A"],
          scores: [8, 11],
          players: [
            ["Ahmed", "Wale", "Quam"],
            ["Sauce", "Will", "Rodger"],
          ],
        },
        {
          teams: ["Team A", "Team C"],
          scores: [10, 11],
          players: [["Sauce", "Will", "Rodger"], , ["John", "Johnny", "Victor"]],
        },
        {
          teams: ["Team C", "Team B"],
          scores: [11, 1],
          players: [
            ["John", "Johnny", "Victor"],
            ["AJ", "Lateef", "CJ"],
          ],
        },
        {
          teams: ["Team C", "Team D"],
          scores: [11, 6],
          players: [
            ["John", "Johnny", "Victor"],
            ["Ahmed", "Wale", "Quam"],
          ],
        },
        {
          teams: ["Team C", "Team A"],
          scores: [11, 4],
          players: [
            ["John", "Johnny", "Victor"],
            ["Sauce", "Will", "Rodger"],
          ],
        },
        {
          teams: ["Team C", "Team E"],
          scores: [11, 8],
          players: [
            ["John", "Johnny", "Victor"],
            ["CJ", "Rodger", "Ahmed"],
          ],
        },
        {
          teams: ["Team C", "Team D"],
          scores: [7, 11],
          players: [
            ["John", "Johnny", "Victor"],
            ["Quam", "Wale", "Ahmed"],
          ],
        },
        {
          teams: ["Team D", "Team F"],
          scores: [11, 7],
          players: [
            ["Quam", "Wale", "Ahmed"],
            ["Blue", "Will", "Sauce"],
          ],
        },
      ],
    },
  ];

  create(createGameDto: CreateGameDto) {
    return 'This action adds a new game';
  }


  getUpcomingGames() {
    return this.games.filter((game) => !game.date)
  }
  getPlayedGames() {
    return this.games.filter((game) => game.date)
  }

  findOne(id: number) {
    return `This action returns a #${id} game`;
  }

  update(id: number, updateGameDto: UpdateGameDto) {
    return `This action updates a #${id} game`;
  }

  remove(id: number) {
    return `This action removes a #${id} game`;
  }
}
