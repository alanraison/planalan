import axios from 'axios';

class ResourceRequirement {
  constructor(
    public skill: string,
    public start: number,
    public duration: number,
  ) {}
}

export type ProjectId = string;

export class PlannedProject {
  constructor(
    public id: ProjectId,
    public name: string,
    public owner: string,
    public requirements: ResourceRequirement[],
  ) {}
}

class ApiResourceRequirements {
  constructor(
    public skill: string,
    public start: number,
    public duration: number,
  ) {}
}

class ApiProject {
  constructor(
    public id: string,
    public name: string,
    public owner: string,
    public resourceRequirements: ApiResourceRequirements[],
  ) {}
}

export async function getPlannedProjects(): Promise<Map<ProjectId, PlannedProject>> {
  return axios.get<{projects?: ApiProject[], error?: string}>('/api/plannedProjects').then(res => {
    if (res.data.error) {
      throw new Error(res.data.error);
    }
    return new Map(!res.data.projects ? [] : res.data.projects.map(p => {
      const rrs = !p.resourceRequirements ? [] : p.resourceRequirements.map(r => r as ResourceRequirement)
      const pp = new PlannedProject(p.name, p.name, p.owner, rrs);
      return [pp.id, pp];
    }));
  });
}