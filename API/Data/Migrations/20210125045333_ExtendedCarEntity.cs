using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace API.Data.Migrations
{
    public partial class ExtendedCarEntity : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Models",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(nullable: true),
                    OfficialUrl = table.Column<string>(nullable: true),
                    CarManufacturerId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Models", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Models_CarManufacturers_CarManufacturerId",
                        column: x => x.CarManufacturerId,
                        principalTable: "CarManufacturers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "TrimLevels",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Maker = table.Column<string>(nullable: true),
                    ModelName = table.Column<string>(nullable: true),
                    LevelName = table.Column<string>(nullable: true),
                    EnergyForm = table.Column<string>(nullable: true),
                    DayOfAnnounce = table.Column<DateTime>(nullable: false),
                    Length = table.Column<int>(nullable: false),
                    Width = table.Column<int>(nullable: false),
                    Height = table.Column<int>(nullable: false),
                    Price = table.Column<int>(nullable: false),
                    HorsePower = table.Column<double>(nullable: false),
                    AirbagsNumber = table.Column<int>(nullable: false),
                    BootCapacity = table.Column<double>(nullable: false),
                    SizeAndType = table.Column<string>(nullable: true),
                    FuelConsumption = table.Column<double>(nullable: false),
                    CarModelId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TrimLevels", x => x.Id);
                    table.ForeignKey(
                        name: "FK_TrimLevels_Models_CarModelId",
                        column: x => x.CarModelId,
                        principalTable: "Models",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "CarPhotos",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Url = table.Column<string>(nullable: true),
                    IsMain = table.Column<bool>(nullable: false),
                    PublicId = table.Column<string>(nullable: true),
                    CarTrimLevelId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CarPhotos", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CarPhotos_TrimLevels_CarTrimLevelId",
                        column: x => x.CarTrimLevelId,
                        principalTable: "TrimLevels",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CarPhotos_CarTrimLevelId",
                table: "CarPhotos",
                column: "CarTrimLevelId");

            migrationBuilder.CreateIndex(
                name: "IX_Models_CarManufacturerId",
                table: "Models",
                column: "CarManufacturerId");

            migrationBuilder.CreateIndex(
                name: "IX_TrimLevels_CarModelId",
                table: "TrimLevels",
                column: "CarModelId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CarPhotos");

            migrationBuilder.DropTable(
                name: "TrimLevels");

            migrationBuilder.DropTable(
                name: "Models");
        }
    }
}
