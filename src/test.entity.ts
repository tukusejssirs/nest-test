import {Entity, Index, PrimaryKey} from '@mikro-orm/core'

@Entity({schema: 'test', tableName: 'test'})
@Index({properties: ['id'], type: 'btree'})
export class Test {
	@PrimaryKey()
	id!: number
}
