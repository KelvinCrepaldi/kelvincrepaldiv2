import Link from "next/link";
export default function Typeorm() {
  const anotação = `------------------------ Estrutura basica de exemplo:--------------------------

  import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    CreateDateColumn,
  } from "typeorm";
  
  @Entity("users")
  export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;
  
    @Column()
    nome: string;
  
    @Column()
    email: string;
  
    @Column()
    password: string;
  
    @Column()
    adm: boolean;
  
    @Column()
    ativo: boolean;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updateAt: Date;
  }
  
  --------------------------------Relacionamentos -------------------------------------------
  
  Lembrar que ao criar novos relacionamentos é necessario definir como {nullable: true} para não conflitar com dados que já existiam.
  
  ========== 1:1
  É necessario relacionar apenas em um lado!
  "Property" 1:1 "Address"
  
  src/entities/property.entity.ts
         @OneToOne(() => Address, { eager: true })
        @JoinColumn()
        address: Address;
  
  
  ========== N:1 ou 1:N
  "Property" N:1 "Category"
  
  src/entities/property.entity.ts
        @ManyToOne(() => Category, { nullable: true, eager: true })
        category: Category;
  
  src/entities/category.entity.ts
       @OneToMany(() => Property, (property) => property.category)
       properties: Property[];
  
  ========== N:N
  É necessario criar uma tabela pivo onde será armazenado a junção das duas tabelas:
  "Property" N:1  "Schedule" 1:N "User"
  
  src/entities/schedule.entity.ts
        @ManyToOne(() => User)
        user: User;
  
        @ManyToOne(() => Property)
        property: Property;
  
  src/entities/property.entity.ts
       @OneToMany(() => Schedule, (schedule) => schedule.property)
       schedule: Schedule[];
  
  src/entities/user.entity.ts
       @OneToMany(() => Schedule, (schedule) => schedule.user)
       schedules: Schedule[];`;
  return (
    <pre className=" leading-5">
      <div className="flex justify-end ">
        <Link className="p-2 bg-zinc-600" href="/notes">
          Voltar
        </Link>
      </div>

      {anotação}
    </pre>
  );
}
