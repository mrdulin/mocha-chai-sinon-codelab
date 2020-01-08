import { Pool } from "pg";

export class DbAccess {
  private static readonly postgres = new Pool();

  public saveConsumer(consumer) {
    return DbAccess.postgres.query(`
        INSERT INTO users (consumer_id, email)
        VALUES (${consumer.consumer_id}, ${consumer.email})
        ON CONFLICT (consumer_id) DO UPDATE SET email = ${consumer.email}
        RETURNING *
    `);
  }
}
