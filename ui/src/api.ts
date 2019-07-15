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

export async function getPlannedProjects(): Promise<Map<ProjectId, PlannedProject>> {
  return axios.get<{projects?: PlannedProject[], error?: string}>('/api/plannedProjects').then(res => {
    if (res.data.error) {
      throw new Error(res.data.error);
    }
    return new Map(!res.data.projects ? [] : res.data.projects.map(p => {
      const rrs = !p.requirements ? [] : p.requirements.map(r => r as ResourceRequirement)
      const pp = new PlannedProject(p.name, p.name, p.owner, rrs);
      return [pp.id, pp];
    }));
  });
}