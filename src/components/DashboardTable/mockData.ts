import { Client } from './DashboardTable'
import { faker } from '@faker-js/faker'

const mockData: Array<Client> = []

for (let i = 0; i <= 88; i++) {
  mockData.push({
    id: i,
    accounts: Number(faker.random.numeric(2)),
    active: Math.random() > 0.5,
    assets: faker.finance.amount(0, 10000000),
    client: faker.company.name(),
    shared: Math.random() < 0.75 ? Math.random() > 0.5 : undefined,
    status: Math.random() < 0.75,
    type: Math.random() < 0.75 ? 'Institution' : 'Individual',
  })
}

export default mockData
