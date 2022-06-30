interface PropsPortsService {
  public: string,
  homeDashboard: string,
  eventDashboard: string,
  eventHomePage: string,
  admin: string
}

export const PortsService: PropsPortsService = {
  public: 'http://localhost:4001',
  homeDashboard: 'http://localhost:4002',
  eventDashboard: 'http://localhost:4003',
  eventHomePage: 'http://localhost:4004',
  admin: 'http://localhost:4005',
}

// export {
//   portsService,
//
// };
