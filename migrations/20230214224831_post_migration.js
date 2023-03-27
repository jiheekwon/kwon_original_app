exports.up = async(knex) => {
  await knex.schema.createTable("post", (t) => {
    t.increments()
    t.string("title").notNull()
    t.text("content")
    t.date("study_date").notNull();
    t.timestamps(true, true)
  });
};

exports.down = async(knex) => {
  await knex.schema.dropTable("post")
};
