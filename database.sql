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
    ('Fill up tank', false, '01-01-2020', 'Only 3 miles til empty'),
    ('Buy groceries', false, '01-01-2020', 'Mans gotta eat');