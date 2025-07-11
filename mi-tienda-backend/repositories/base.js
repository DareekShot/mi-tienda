class RepositoryBase {
  constructor(model) {
    this.model = model;
  }

  async findAll() {
    return await this.model.findAll();
  }

  async findOne(id) {
    return await this.model.findByPk(id);
  }

  async create(data) {
    return await this.model.create(data);
  }

  async update(entity) {
    const { id } = entity;
    return await this.model.update(entity, { where: { id } });
  }

  async remove(id) {
    return await this.model.destroy({ where: { id } });
  }
}

export default RepositoryBase;
