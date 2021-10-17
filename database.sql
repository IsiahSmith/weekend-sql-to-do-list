CREATE TABLE "weekend-to-do-app" (
    "id" SERIAL PRIMARY KEY,
    "task" VARCHAR(255) NOT NULL,
    "complete" BOOLEAN DEFAULT FALSE,
    "complete_by" DATE,
    "notes" VARCHAR(255)
);

INSERT INTO "weekend-to-do-app"
    ("task", "complete", "complete_by", "notes")
VALUES
    ('Fill up tank', false, '10-17-2021', 'Only 3 miles til empty'),
    ('Buy groceries', false, '10-21-2021', 'Making dinner for whole family');