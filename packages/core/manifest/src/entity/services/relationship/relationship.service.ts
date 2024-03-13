import { faker } from '@faker-js/faker'
import { Injectable } from '@nestjs/common'
import { ManifestService } from '../../../manifest/services/manifest/manifest.service'
import {
  EntityManifest,
  RelationshipManifest
} from '../../../manifest/typescript/manifest-types'

@Injectable()
export class RelationshipService {
  constructor(private manifestService: ManifestService) {}

  /**
   * Get the seed value for a relationship based on the relationship seed count.
   *
   * @param relationshipManifest The relationship manifest.
   *
   * @returns The seed value (id).
   *
   **/
  getSeedValue(relationshipManifest: RelationshipManifest): number {
    const relatedEntity: EntityManifest =
      this.manifestService.getEntityManifest({
        className: relationshipManifest.entity,
        fillDefaults: true
      })

    return faker.number.int({
      min: 1,
      max: relatedEntity.seedCount
    })
  }
}
